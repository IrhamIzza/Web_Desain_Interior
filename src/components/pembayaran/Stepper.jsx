export default function Stepper({bg1, bg2, text1, text2} ) {
  return (
    <>
      <div className="flex flex-col items-center text-blue-600 font-medium">
        <span>Data Diri</span>
        <i className="ph ph-check-circle text-xl "></i>
      </div>

      <div className={`flex-1 h-px bg-${bg1}-400 mt-6`} />

      <div className={`flex flex-col items-center text-${text1}-600`}>
        <span>Pembayaran</span>
        <i className="ph ph-dots-three-circle text-xl"></i>
      </div>

      <div className={`flex-1 h-px bg-${bg2}-400 mt-6`} />

      <div className={`flex flex-col items-center text-${text2}-600`}>
        <span>Detail</span>
        <i className="ph ph-dots-three-circle text-xl"></i>
      </div>
    </>
  );
}
