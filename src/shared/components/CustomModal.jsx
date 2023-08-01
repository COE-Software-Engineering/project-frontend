import { Modal } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import { LIGHTTHEME } from "../utils/constants";

const CustomModal = ({
  title,
  open,
  onOk,
  confirmLoading,
  onCancel,
  children,
}) => {
  const { appTheme } = useContext(GlobalContext);

  return (
    <ModalWrapper>
      <Modal
        className="modal"
        wrapClassName="modal-wrap"
        rootClassName="modal-root"
        title={title}
        open={open}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
        style={{
          backgroundColor: appTheme === LIGHTTHEME ? "#f4f6fc" : "#181820",
        }}
        bodyStyle={{
          width: "100%",
          backgroundColor: appTheme === LIGHTTHEME ? "#f4f6fc" : "#181820",
        }}
        footer={null}
      >
        {children}
      </Modal>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  & .modal-root {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  & .modal {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  & .modal-wrap {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default CustomModal;
