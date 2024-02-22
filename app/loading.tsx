"use client";
import { MutatingDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#2185d0"
      secondaryColor="#2185d0"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass="mx-auto"
    />
  );
}
