const MortgageResultPreview = () => {
  return (
    <div className="bg-mySlate-900 flex flex-col justify-center items-center py-6 px-8 md:px-16 md:rounded-bl-[40px] md:rounded-tr-lg md:rounded-br-lg gap-3">
      <img src="/illustration-empty.svg" alt="Mortgage calculator illustration" className="h-40 w-40 object-cover"/>
      <h2 className="text-xl font-700 text-mySlate-100">Results shown here</h2>
      <p className="text-mySlate-300 text-xs leading-6 font-500 text-center">Complete the form and click "calculate repayments" to see what your monthly repayment would be</p>
    </div>
  );
}

export default MortgageResultPreview;
