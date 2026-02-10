export default function Stepper({bg1, bg2, text1, text2 ,icon1 , icon2} ) {
  return (
    <>
      <div className="flex flex-col items-center text-blue-600 font-medium">
        <span>Data Diri</span>
        <i className="ph ph-check-circle text-xl "></i>
      </div>

      <div className={`flex-1 border border-${bg1}-400 mt-6`} />

      <div className={`flex flex-col items-center text-${text1}-600`}>
        <span>Pembayaran</span>
        <i className={`ph ${icon1} text-xl`}></i>
      </div>

      <div className={`flex-1 border border-${bg2}-400 mt-6`} />

      <div className={`flex flex-col items-center text-${text2}-600`}>
        <span>Detail</span>
        <i className={`ph ${icon2} text-xl`}></i>
      </div>
    </>
  );
}
