import Education from './Education'
import Certifications from './Certifications'

function EducationCertification() {
  return (
    <div className="grid grid-cols-1 gap-6">
    <Education />
    <Certifications />
  </div>
  )
}

export default EducationCertification