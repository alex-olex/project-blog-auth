import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className],
                )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title="Failed to load profile"
                    text="Please try to reload the page"
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder="Name"
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Lastname"
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder="Age"
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder="City"
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder="Username"
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder="Avatar"
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
