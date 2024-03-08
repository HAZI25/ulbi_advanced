import Loader from '6_shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

const PageLoader = () => {
	return (
		<div className={cls.PageLoader}>
			<Loader />
		</div>
	);
};

export default PageLoader;
