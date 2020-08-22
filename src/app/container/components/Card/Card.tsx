import React from "react";
import { Button } from "@/app/container/components/index";

const Card = (props) => {
  return (
    <div className="container border-blue-300 border-2 text-center max-w-xs rounded overflow-hidden shadow-lg h-auto bg-gray-200 p-5 m-4">
      <h1 className="font-bold text-sm md:text-lg mb-4">{props.data.title}</h1>
      <h1 className="text-xs md:text-sm h-10 mb-4">{props.data.detail}</h1>
      <Button
        onClick={() => {
          window.location.href = props.data.url;
        }}
        variant="primary"
        size="small"
      >
        <span className="text-xs md:text-sm">
          <b>Kunjungi Aplikasi</b>
        </span>
      </Button>
    </div>
  );
};

export default Card;
