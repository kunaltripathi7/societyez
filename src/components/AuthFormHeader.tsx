interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
}

const AuthFormHeader = ({ title, subtitle}: AuthFormHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
            <div className="flex mb-8">
                <div className="w-8 h-5 bg-primary transform skew-x-[-20deg] mr-1"></div>
                <div className="w-8 h-5 bg-muted transform skew-x-[-20deg]"></div>
            </div>

            <div className="space-y-2 mb-10">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <p className="text-slate-500 text-sm text-center">{subtitle}</p>
            </div>    
    </div>
  )
}

export default AuthFormHeader;