import Carousel from "./Carousel";

function Termekek() {
    return (
        <div className="container">
            <h1 className="my-5">
                Termékek
            </h1>
            <div className="container">
                <div className="row">
                    <img className="col termek-kep" src="placeholder.svg" alt="placeholder" />
                    <p className="col mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt, eros sagittis faucibus faucibus, neque augue accumsan diam, vitae consequat ex arcu at quam. Nam vitae augue ullamcorper, laoreet tellus in, porta neque. Cras congue fringilla dictum. In lacinia commodo turpis. Sed metus sapien, feugiat dignissim rhoncus in, consequat ut lacus. Nulla gravida odio ut quam facilisis sollicitudin. Nullam sit amet nibh nisi. Pellentesque facilisis congue diam, et mattis urna tempus eu. Fusce venenatis libero eget pulvinar gravida. Vestibulum sed diam vitae dolor ultrices auctor at sed enim. Ut maximus nisi in purus congue, in volutpat diam placerat. Sed et risus magna.
                    </p>
                </div>

            </div>
            <p className="text-center mt-3 text-danger">
                Tbh nem tudom ez a rész hogy nézzen ki
            </p>
            <Carousel/>
        </div>
    );
}

export default Termekek;
