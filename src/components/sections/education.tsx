import PAST_ROLES from '@/data/experience'
import education from '@/data/education'

export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Education</h2>

      <div className="mb-8">
        <h3 className="font-heading text-lg sm:text-xl">{education.school}</h3>

        <p className="mt-0.5 mb-4 text-sm">{education.period}</p>
        <p className="mt-0.5">
          {education.degree} of
          <b> {education.field} </b>- GPA: {education.gpa}/10.0
        </p>
        <p className="mt-0.5 mb-4">
          Specializing in <b>{education.specialize}</b>
        </p>
      </div>
    </div>
  )
}
