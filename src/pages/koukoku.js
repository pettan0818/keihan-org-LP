import React from "react"

const datetime = new Date();

console.log(datetime);
console.log(datetime.getDate());
console.log(datetime.getMonth());

const main_element = (
    <div>
        <h1>一般社団法人京阪マーケティング・リサーチ機構 公告事項</h1>
        {datetime.getFullYear()}/{datetime.getMonth()+1}/{datetime.getDate()}時点において、該当事項はございません。
    </div>
);

const koukoku = () => {
    return main_element
}

export default koukoku