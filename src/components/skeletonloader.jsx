// src/components/SkeletonLoader.js

import React from "react";
import "./skeletonloader.scss";

export default function skeletonloader() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  );
}
