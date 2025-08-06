import "./Transporting.css"

export default function Transporting() {
    return (
        <section className="transport">
            <div className="container transport__container">
                <h2 className="transport__title">Transporting Across The World</h2>
                <div className="transporting__blog">
                <div className="transport-box">
                    <a href="#">
                        <p className="transport-box-title">Liquid Transportation</p>
                        <p className="transport-box-text">Premium Tankers</p>
                    </a>
                </div>
                <div className="transport-box">
                    <a href="#">
                        <p className="transport-box-title">Packaging Solutions</p>
                        <p className="transport-box-text">Warehouse Management</p>
                    </a>
                </div>
                <div className="transport-box">
                    <a href="#">
                        <p className="transport-box-title">Contract Logistics</p>
                        <p className="transport-box-text">Road Transportation</p>
                    </a>
                </div>
                <div className="transport-box">
                    <a href="#">
                        <p className="transport-box-title">Warehouse & Distribution</p>
                        <p className="transport-box-text">Large Warehouse</p>
                    </a>
                </div>
                <div className="transport-box">
                    <a href="#">
                        <p className="transport-box-title">Specialized Transport</p>
                        <p className="transport-box-text">Ocean Transports</p>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}