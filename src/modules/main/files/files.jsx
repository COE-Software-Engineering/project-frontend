import React from "react";
import styled from "styled-components";
import IonIcon from "../../../shared/components/Ionicon";
import { defaultTheme } from "../../../shared/theme/theme";
import { Input, Upload } from "antd";
import Titlebar from "../../../shared/components/Titlebar";
import AnimationLayout from "../../../shared/components/AnimationLayout";

const Files = () => {
  return (
    <AnimationLayout>
      <FilesWrapper>
        <Titlebar title="My Files" />
        <ContentWrapper>
          <label>
            <div className="file-uploader-content">
              <IonIcon iconName="cloud-upload" />
              <p>Drag and drop here</p>
              <p>or</p>
              <p>
                <span>Browse</span> to upload your files
              </p>
            </div>
          </label>
          <FileUploaderWrapper type="file" />
        </ContentWrapper>
      </FilesWrapper>
    </AnimationLayout>
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

const FileUploaderWrapper = styled.input`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background-color: transparent;
  border: 2px dashed ${({ theme }) => theme.accentColor2};
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
    color: ${defaultTheme.primaryColor};
  }

  & .file-uploader-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 240px;
  }
`;

export default Files;
