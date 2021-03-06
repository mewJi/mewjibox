import React from 'react';

export default function CardArticleWithTopImg({
  title,
  description,
  imageUrl,
  titleAlign,
}) {
  return (
    <div>
      <img
        alt="..."
        src={imageUrl}
        className="w-full rounded-lg pt-10 pl-10 pr-10 pb-5 "
      />
      <div className={titleAlign}>
        <h2 className=" text-2xl font-semibold text-blue-600">{title}</h2>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}
