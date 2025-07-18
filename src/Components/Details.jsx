import { PiSpeakerHighFill } from "react-icons/pi";
import { TbTruckLoading } from "react-icons/tb";

import { useAppContext } from "../AppContext";
import React from "react";

export function Details() {
  const { wordData, loading } = useAppContext();

  function pronounceWord(audio) {
    if (audio) new Audio(audio).play();
  }

  if (loading) {
    return <TbTruckLoading size={400} />;
  }
  return (
    wordData.length > 0 && (
      <>
        <div className="pronounciation">
          <h2>
            {wordData[0]?.word.slice(0, 1).toUpperCase() +
              wordData[0]?.word.slice(1)}
          </h2>
          <ul>
            {wordData[0]?.phonetics?.map((phonetic, index) => (
              <li>
                <button
                  key={index}
                  onClick={() => pronounceWord(phonetic?.audio)}
                >
                  <PiSpeakerHighFill />
                </button>
                <span style={{ marginLeft: "10px" }}>{phonetic.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* meanings */}

        <div>
          {wordData[0]?.meanings?.map((item, index) => (
            <div key={index}>
              <h4>
                {item?.partOfSpeech.slice(0, 1).toUpperCase() +
                  item?.partOfSpeech.slice(1)}
              </h4>
              <ul>
                {item?.definitions?.map((item, index) => (
                  <li key={index}>{item?.definition}</li>
                ))}
              </ul>
              {item?.synonyms?.length > 0 && (
                <ul>
                  Synonyms
                  <React.Fragment key={index}>
                    {item?.synonyms?.map((synonym, index) => (
                      <li key={index}>{synonym}</li>
                    ))}
                  </React.Fragment>
                </ul>
              )}

              {item?.antonyms?.length > 0 && (
                <ul>
                  Antonyms
                  <React.Fragment key={index}>
                    {item?.antonyms?.map((antonyms, index) => (
                      <li key={index}>{antonyms}</li>
                    ))}
                  </React.Fragment>
                </ul>
              )}
            </div>
          ))}
        </div>
      </>
    )
  );
}
