import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Test from '../Test'
import { CoursesPage, KidsPage, BookingPage, DogGymPage, TrainersPage, BlogPage } from './Pages'

export default function AppRouter(){
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/dog-gym" element={<DogGymPage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
