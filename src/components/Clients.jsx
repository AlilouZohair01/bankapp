import { client1 ,client2 ,client3 ,client4 } from "../constants"
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} sm:ml-3 ml-10 mr-10`}>
          {client1.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]  sm:ml-4 ml-10 `}>
              <img src={client.logo} alt="clioentlogo" className="sm:w-[100px] w-[300px] object-contain"/>
            </div>
          ))}
      </div>
      <div className={`${styles.flexCenter} sm:ml-3 ml-10 mr-10`}>
          {client2.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="clioentlogo" className="sm:w-[100px] w-[300px] object-contain"/>
            </div>
          ))}
      </div>
      <div className={`${styles.flexCenter} sm:ml-3 ml-10 mr-10`}>
          {client3.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="clioentlogo" className="sm:w-[100px] w-[300px]object-contain"/>
            </div>
          ))}
      </div>
      <div className={`${styles.flexCenter} sm:ml-3 ml-0 mr-3`}>
          {client4.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="clioentlogo" className="sm:w-[100px] w-[300px] object-contain"/>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Clients