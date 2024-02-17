function Csapat() {
    return (
        <div className="content container">
            <h1 className="mb-5">
                Ez a mi kis csapatunk, amikor csak tudunk, az utcákon csapatunk
            </h1>
            <div className="row">
                <div className="col card mx-4 text-center border-0">
                    <img src="profile.png" className="card-img-top profilkep mx-auto" alt="Profile" />
                    <div className="card-body mt-2">
                        <b>Cserháti Ákos</b><br />
                        Pénisz szakértő
                    </div>
                </div>
                <div className="col card mx-4 text-center border-0">
                    <img src="profile.png" className="card-img-top profilkep mx-auto" alt="Profile" />
                    <div className="card-body mt-2">
                        <b>Payrits Márton</b><br />
                        Pénisz szakértő
                    </div>
                </div>
                <div className="col card mx-4 text-center border-0">
                    <img src="profile.png" className="card-img-top profilkep mx-auto" alt="Profile" />
                    <div className="card-body mt-2">
                        <b>Sipos Benedek</b><br />
                        Pénisz szakértő
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Csapat;