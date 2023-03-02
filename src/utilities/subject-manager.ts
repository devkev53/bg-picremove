import { Subject } from "rxjs"

export class Subjectmanager {
  subject$ = new Subject()

  getSubject() {
    return this.subject$.asObservable()
  }

  setSubject(value) {
    this.subject$.next(value)
  }
}