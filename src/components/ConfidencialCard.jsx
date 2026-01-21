import React from 'react'

function ConfidencialCard({item}) {
  return (
    <div className={`${item?.bg} rounded-xl p-5`}>
        <p className="text-sm text-gray-200">{item?.title}</p>
        <h2 className="text-2xl font-bold text-gray-50 mt-1"><span>{item?.exp}+</span> {item?.exptxt && <span>{item?.exptxt}</span>}</h2>
        <span className="text-green-100 text-sm">{item?.overall}</span>
    </div>
  )
}

export default ConfidencialCard