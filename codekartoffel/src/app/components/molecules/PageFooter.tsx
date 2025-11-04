export default function PageFooter() {
  return (
    <footer className="flex h-14 w-full px-[32px] bg-gray-100 dark:bg-gray-900 sticky bottom-0">
      <a className="flex flex-row hover:text-gray-400 cursor-pointer active:text-gray-500" href="mailto:marcuspanozzo@gmail.com>?subject=Website%20Inquiry">
        <i className="fa-solid fa-envelope mt-auto mb-auto" /> 
        <div className="mt-auto mb-auto text-l ml-[8px]">marcuspanozzo@gmail.com</div>
      </a>
      <div className="mt-auto mb-auto h-5/10 w-[1px] mt-[4px] mb-[4px] bg-gray-200 mx-[16px]"></div>
      <a className="flex flex-row hover:text-gray-400 cursor-pointer active:text-gray-500" href="tel:+12016754523">
        <i className="fa-solid fa-phone mt-auto mb-auto" />
        <div className="mt-auto mb-auto text-l ml-[8px]">+1 (201) 675-4523</div> 
      </a>
    </footer>
  )
}
