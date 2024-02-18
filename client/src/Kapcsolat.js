
function Kapcsolat() {


    return (
        <div className="container my-5 py-5">
            <h1 className="my-5">
                Kapcsolat
            </h1>
            <div className="row">
                <div className="col-6"><i>
                    In tincidunt velit sit amet mi suscipit, maximus suscipit magna tempor. Sed purus lectus, pellentesque ut dignissim id,
                    tincidunt ut justo. Aenean a velit scelerisque, consequat est id, pharetra metus. Etiam viverra urna ac diam eleifend,
                    nec lacinia turpis pellentesque. Morbi eu diam hendrerit, dignissim elit sed, accumsan diam. Mauris in hendrerit justo,
                    consequat mollis ipsum. Maecenas lacinia tincidunt massa in bibendum. Sed pharetra, orci vel placerat suscipit,
                    risus mauris elementum massa, non molestie ipsum justo ac massa. Vivamus viverra dignissim nunc sed fringilla. Ut eget massa enim.
                    In hac habitasse platea dictumst. Nam at sapien suscipit, finibus sem sit amet, tristique felis. Proin ullamcorper rutrum hendrerit.
                    Aenean eu varius nunc. Maecenas orci sapien, porttitor at lorem eget, dignissim iaculis metus.</i>
                </div>
                <div className="col-6">
                    <form>
                        <div className="form-group my-2">
                            <label htmlFor="email">E-mail cím</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autocomplete="email" placeholder="Saját vagy válallata e-mail címe" />
                            <small id="emailHelp" className="form-text text-muted">E-mail címét nem osztjuk meg senkivel</small>
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="name">Név</label>
                            <input type="text"className="form-control" id="name" autocomplete="name" placeholder="Teljes név"/>
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="uzenet">Üzenet</label>
                            <textarea type="text"className="form-control" id="uzenet" rows={6} placeholder="Kérdés, ajánlatkérés stb." />
                        </div>
                        <div className="text-center">
                            <button type="submit"className="btn btn-primary mt-3 mb-5">E-mail küldése</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );


}

export default Kapcsolat;