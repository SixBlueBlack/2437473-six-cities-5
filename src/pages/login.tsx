import { Link } from 'react-router-dom';
import { LogInForm } from '../components/login-form.tsx';
import { AppRoutes } from '../consts/consts.ts';
import { LocationItem } from '../components/location-item.tsx';

function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoutes.Main}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LogInForm />
          </section>
          <LocationItem />
        </div>
      </main>
    </div>
  );
}

export default Login;
