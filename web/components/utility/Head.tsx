import React, { FC, useState, useEffect } from "react";
import NHead from "next/head";

interface BaseProps {
  title?: string;
}

const Head: FC<BaseProps> = ({ title }) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <NHead>
      <title>
        {focused
          ? `${title ? `${title} | ` : ""} PureVault`
          : "🔒 PureVault 🔒"}
      </title>
      <meta name="title" content="Purevault" />
      <meta
        name="description"
        content="PureVault is a password and credential manager tailored for software professionals, emphasizing simplicity, efficiency, and security. It seamlessly integrates into various programming environments, offering advanced encryption, easy navigation, and features like version control and automated password updates. PureVault is the go-to solution for developers needing a secure, effective way to manage sensitive information."
      />
      <meta name="keywords" content="Password Manager, Secrets, Developer" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Thyke Adams" />
    </NHead>
  );
};

export default Head;
