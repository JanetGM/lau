function Layout  ({bgColor, children, bgImage, customeClass}) {
 return(
 <div 
  className={`layout flex h-auto  flex-col items-center  p-36 ${bgImage && 'image'} ${customeClass || ''}`}
  style={{
    backgroundColor:bgColor,
  }}
  >
   {children}
 </div>
 )
}
export default Layout;