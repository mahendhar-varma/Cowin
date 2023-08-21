import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, dataObject: {}}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        dataObject: updateData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessUi = () => {
    const {dataObject} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = dataObject
    console.log(vaccinationByAge)

    return (
      <>
        <div className="vaccination-container">
          <h1 className="head">Vaccination Coverage</h1>
          <VaccinationCoverage data={last7DaysVaccination} />
        </div>
        <div className="vaccination-container">
          <h1 className="head">Vaccination by gender</h1>
          <VaccinationByGender data={vaccinationByGender} />
        </div>
        <div className="vaccination-coverage-container">
          <h1 className="head">Vaccination by age</h1>
          <VaccinationByAge data={vaccinationByAge} />
        </div>
      </>
    )
  }

  renderFailureUi = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure">Something went wrong</h1>
    </div>
  )

  renderLoadingUi = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </div>
  )

  requiredUi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessUi()
      case apiStatusConstants.failure:
        return this.renderFailureUi()
      case apiStatusConstants.inProgress:
        return this.renderLoadingUi()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="logo-head">Co-WIN</h1>
        </div>
        <h1 className="title">CoWIN Vaccination In India</h1>
        {this.requiredUi()}
      </div>
    )
  }
}
export default CowinDashboard
