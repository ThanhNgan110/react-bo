interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  icon?: React.ReactNode
}

const Avatar = ({ className, src, alt, icon }: AvatarProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {src ? <img src={src} alt={alt} className="rounded-full" /> : icon}
    </div>
  )
}

export default Avatar
