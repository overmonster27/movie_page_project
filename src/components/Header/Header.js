import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <form>
                    <input placeholder={'Search'} type={"text"}/>
                    <button>Search</button>
                </form>
            </div>
            <div className={css.User}>User</div>
        </div>
    );
};

export {Header};