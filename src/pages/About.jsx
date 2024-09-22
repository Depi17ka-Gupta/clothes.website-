import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ad
            delectus quod magnam fuga minima, perspiciatis totam enim laborum
            voluptatibus, dolore mollitia nostrum inventore tempore dolorem
            repudiandae libero illum cupiditate.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            cumque necessitatibus cupiditate voluptatem quaerat suscipit, modi
            totam quia commodi. Similique odio libero inventore repellat iusto,
            fugiat quidem sed molestias laboriosam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            architecto aliquam deserunt unde harum ad eum repellendus aliquid
            sed obcaecati, similique repellat, minus rerum beatae nulla iusto
            tempore, blanditiis voluptate.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm md-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            perferendis laudantium, eveniet voluptate nostrum animi accusantium
            beatae incidunt perspiciatis vitae neque ex nisi cupiditate
            architecto qui quia et quibusdam fugit!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            perferendis laudantium, eveniet voluptate nostrum animi accusantium
            beatae incidunt perspiciatis vitae neque ex nisi cupiditate
            architecto qui quia et quibusdam fugit!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            perferendis laudantium, eveniet voluptate nostrum animi accusantium
            beatae incidunt perspiciatis vitae neque ex nisi cupiditate
            architecto qui quia et quibusdam fugit!
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
