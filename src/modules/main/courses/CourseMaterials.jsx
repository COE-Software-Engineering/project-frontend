import React, { useState, useEffect, useCallback, useContext } from "react";
import ComponentWrapper from "../../../shared/components/ComponentWrapper";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../shared/utils/constants";
import Empty from "../../../shared/components/Empty";
import { Button, message } from "antd";
import CustomModal from "../../../shared/components/CustomModal";
import { courseMaterialsQuery } from "../../../shared/helpers/sanity/sanityQueries";
import { client } from "../../../shared/helpers/sanity/sanityClient";
import IonIcon from "../../../shared/components/IonIcon";
import { GlobalContext } from "../../../shared/context/context";
import AddCourseMaterial from "./AddCourseMaterial";
import ResourceCard from "../resources/ResourceCard";

const CourseMaterials = ({ courseName }) => {
  const [courseMaterials, setCourseMaterials] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useContext(GlobalContext);

  const fetchCourseMaterials = useCallback(async () => {
    const q = courseMaterialsQuery(courseName);
    await client
      .fetch(q)
      .then((res) => {
        setCourseMaterials(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        message.error("Failed to load course materials!");
      });
  }, []);

  useEffect(() => {
    fetchCourseMaterials();
  }, []);

  return (
    <CourseMaterialsWrapper>
      <ComponentWrapper
        title={"Course Materials"}
        titleComponent={
          currentUser?.staff_id && (
            <Button
              className="title-btn"
              icon={<IonIcon iconName="add" />}
              onClick={() => setOpenModal(true)}
            >
              Add material
            </Button>
          )
        }
      >
        {courseMaterials.length === 0 ? (
          <Empty subText={"No course materials!"} />
        ) : (
          <ContentWrapper>
            {courseMaterials.map((resource) => (
              <ResourceCard
                key={resource._id}
                width={"24%"}
                resource={resource}
              />
            ))}
          </ContentWrapper>
        )}
      </ComponentWrapper>
      <CustomModal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        title="Add course material"
      >
        <AddCourseMaterial
          courseName={courseName}
          setOpenModal={setOpenModal}
        />
      </CustomModal>
    </CourseMaterialsWrapper>
  );
};

const CourseMaterialsWrapper = styled.div`
  & .title-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: transparent !important;
    font-size: 12px;
    border-radius: 7px;
    box-shadow: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }
  }
`;

export default CourseMaterials;
