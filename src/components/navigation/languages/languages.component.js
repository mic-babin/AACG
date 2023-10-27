import React, { useEffect, useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Lang } from "./languages.style";

const Languages = () => {
  const { languages, originalPath, i18n } = useI18next();
  const language = i18n.language;

  const [visibleLang, setVisibleLang] = useState(
    languages.filter((lng) => lng !== language)
  );

  useEffect(() => {
    setVisibleLang(languages.filter((lng) => lng !== language));
  }, [language, languages]);

  return (
    <div className="d-block">
      {languages &&
        visibleLang.map((lng) => {
          return (
            <Lang
              key={lng}
              to={originalPath}
              language={lng}
              className="d-inline-block d-sm-flex flex-column d-lg-inline-block align-items-end"
            >
              {languages.filter((lang) => lang.includes(lng))[0].toUpperCase()}
            </Lang>
          );
        })}
    </div>
  );
};

export default Languages;
