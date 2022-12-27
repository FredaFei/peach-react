import { Navigate } from "react-router-dom"
import { LocalStorage } from "../shared/localStorage"

export const Root: React.FC = () => {
  const hasRead = LocalStorage.getReadWelcomes()
  
  if (hasRead === 'yes') {
    return <Navigate to="/home" />
  } else {
    return <Navigate to="/welcome/1" />
  }
}
