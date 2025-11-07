export default function LoadingSpinner({text, size = 30 }:{text?: string, size: number}){
return (
    <div className="flex items-center justify-center">
      <div style={{width:size, height:size}} className={`border-4 border-accent-500 border-t-transparent rounded-full animate-spin`}></div>
      <p className="ml-2">{text}</p>
    </div>
  );

}