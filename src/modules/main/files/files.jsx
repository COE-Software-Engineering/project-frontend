import React from "react";
import styled from "styled-components";
import Headerbar from "../../../shared/components/Headerbar";
import IonIcon from "../../../shared/components/Ionicon";
import { defaultTheme } from "../../../shared/theme/theme";
import { Input, Upload } from "antd";

const Files = () => {
  return (
    <FilesWrapper>
      <Headerbar>
        <p>My Files</p>
      </Headerbar>
      <ContentWrapper>
        <Upload
          // type="file"
          // hidden

          style={{ width: "100%", position: "absolute", height: "100%" }}
        />
        <FileUploaderWrapper>
          <IonIcon iconName="cloud-upload" />
          <p>Darg and drop here</p>
          <p>or</p>
          <p>
            <span>Browse</span> to upload your files
          </p>
        </FileUploaderWrapper>
      </ContentWrapper>
    </FilesWrapper>
  );
};

const FilesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const FileUploaderWrapper = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  border: 2px dashed rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  ion-icon {
    font-size: 80px;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.4rem;
  }

  span {
    color: ${defaultTheme.primaryColor[400]};
  }
`;

export default Files;
