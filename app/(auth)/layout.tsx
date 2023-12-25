const AuthLayout =({
  children
}:{
  children: React.ReactNode;
})=>{
  return(
      <div className="flex item-center justify-center mt-20">
          {children}
      </div>
  );
}

export default AuthLayout;