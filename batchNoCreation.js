//let batchNo = "2020/DEC/01000";
const getBatchNo = (batchNo) => {
    const zeroPad = (num, places) => String(num).padStart(places, "0");
  let today = new Date();
  const currentMonthName = today
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const currentYear = today.getFullYear();
  if(!batchNo){
    let newBatchSequenceNo = 1;
    return `${currentYear}/${currentMonthName}/${zeroPad(
        newBatchSequenceNo,
        5
      )}`;
  }
  const batchNoArr = batchNo.split("/");
  const batchYear = +batchNoArr[0];
  const batchNoMonthName = batchNoArr[1];
  let batchSequenceNo = +batchNoArr[2];

 
  if (+currentYear == +batchYear && currentMonthName == batchNoMonthName) {
    // Year and month equal increase batch sequence number;
    console.log("Year and month equal increase batch sequence number");
    batchSequenceNo++;
    return `${batchYear}/${batchNoMonthName}/${zeroPad(
      batchSequenceNo,
      5
    )}`;
  } else if (
    +currentYear == +batchYear &&
    currentMonthName != batchNoMonthName
  ) {
    // Year  equal but month not equal reset month and batch sequence number
    console.log(
      "Year  equal but month not equal reset month and batch sequence number"
    );
    let newBatchSequenceNo = 1;
    return `${batchYear}/${currentMonthName}/${zeroPad(
      newBatchSequenceNo,
      5
    )}`;
  } else if (+currentYear != +batchYear) {
    // Year not equal  but month equal reset year , month and batch sequence number
    console.log(
      "Year equal but month not equal reset month and batch sequence number"
    );
    let newBatchSequenceNo = 1;
    return `${currentYear}/${currentMonthName}/${zeroPad(
      newBatchSequenceNo,
      5
    )}`;
  }
};
console.log(
    getBatchNo(null)
);
