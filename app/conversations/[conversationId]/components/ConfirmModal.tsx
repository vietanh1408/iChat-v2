"use client";

import Modal from "@/app/components/Modal/Modal";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import Button from "@/app/components/Button/Button";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onClose, isOpen }) => {
  const router = useRouter();

  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = React.useState(false);

  const onDelete = React.useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversations");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [conversationId, onClose, router]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center rounded-full bg-ref-100 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="
                    text-base
                    font-semibold 
                    leading-6
                    text-gray-900
                    "
          >
            Delete conversation
          </Dialog.Title>
          <div className="mt-2">
            <p>
              Are you sure you want to delete this conversation? That action can
              be undone
            </p>
          </div>
        </div>
      </div>
      <div
        className="
        mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
      >
        <Button disabled={isLoading} danger onClick={onDelete}>
          Delete
        </Button>
        <Button disabled={isLoading} secondary onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
