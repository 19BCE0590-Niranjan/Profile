import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";

export default function PluginfilecoverOnePage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[960px] w-full bg-blue_gray-50 relative">
        <Img
          src="images/img_objects.png"
          alt="objects_one"
          className="justify-center h-[960px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.04 object-cover absolute"
        />
        <div className="justify-center h-[567px] w-[41%] left-0 bottom-0 right-0 top-0 m-auto absolute">
          <Img
            src="images/img_rectangle_1.svg"
            alt="image"
            className="justify-center h-[567px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[97px]"
          />
          <div className="flex flex-col items-center justify-center w-max h-max gap-[26px] left-0 bottom-0 right-0 top-0 m-auto absolute">
            <Img src="images/img_mask_group.svg" alt="image_one" className="h-[167px] w-[167px]" />
            <div className="flex flex-col items-center justify-start w-full">
              <Heading size="s" as="h1" className="!text-[41.87px]">
                Shambhavi Mishra
              </Heading>
              <Heading as="h2" className="mt-2 text-center !text-[20.94px]">
                Shambhavi is a well-rounded web publisher with 15 years experience working as an art director for large
                corporations in the technology sector.
              </Heading>
              <div className="flex flex-row justify-between w-[29%] mt-[39px]">
                <Button className="flex items-center justify-center h-[41px] w-[41px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
                <Button className="flex items-center justify-center h-[41px] w-[41px]">
                  <Img src="images/img_linkedin_light.svg" />
                </Button>
                <Button className="flex items-center justify-center h-[41px] w-[41px]">
                  <Img src="images/img_tiktok_light.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
