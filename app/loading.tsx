"use client";

import "./loader.css";

const loading = () => {
  return (
    <div className="w-full bg-black-100 h-screen flex items-center justify-center">
      <div>
        <div className="ui-abstergo">
          <div className="abstergo-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="ui-text">
            Synchronization
            <div className="ui-dot"></div>
            <div className="ui-dot"></div>
            <div className="ui-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
