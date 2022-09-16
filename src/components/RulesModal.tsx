import Image from 'next/image';
import { X } from 'phosphor-react';
import Modal from 'react-modal';

interface RulesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RulesModal({ isOpen, onRequestClose }: RulesModalProps) {
  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="w-80 h-80 bg-white rounded-lg flex flex-col p-8">
        <header className="flex items-center justify-between">
          <h1 className="text-blue-900 text-xl">RULES</h1>
          <button onClick={onRequestClose}>
            <X size={24} className="text-gray-500" />
          </button>
        </header>

        <section className="relative flex-1 mt-8">
          <Image src="/image-rules.svg" layout="fill" alt="Rules"/>
        </section>
      </div>
    </Modal>
  )
}