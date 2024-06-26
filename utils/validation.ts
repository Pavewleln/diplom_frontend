const REQUIRED_FIELD = "Обязательно для заполнения";
export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(/[а-яА-я]/g)) {
            return "Русские буквы не поддерживаются";
        }
        if (
            !value.match(
                /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/g
            )
        ) {
            return "Неверная почта";
        }
        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length < 6) {
            return "Пароль должен длиннее 6-ти символов";
        }
        if (value.length > 15) {
            return "Пароль должен быть короче 15 символов";
        }
        return true;
    }
};
export const nameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length > 30) {
            return "Имя должно быть короче 30 символов";
        }
        if (value.length < 3) {
            return "Имя должно быть длинее 3 символов";
        }
        return true;
    }
};
export const surnameValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length > 30) {
            return "Имя должно быть короче 30 символов";
        }
        if (value.length < 3) {
            return "Имя должно быть длинее 3 символов";
        }
        return true;
    }
};
export const titleValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length > 30) {
            return "Название должно быть короче 30 символов";
        }
        if (value.length < 3) {
            return "Название должно быть длинее 3 символов";
        }
        return true;
    }
};
export const typeValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length > 30) {
            return "Название должно быть короче 30 символов";
        }
        if (value.length < 3) {
            return "Название должно быть длинее 3 символов";
        }
        return true;
    }
};
export const descriptionValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length < 10) {
            return "Название должно быть длинее 10 символов";
        }
        if (value.length > 1000) {
            return "Название должно быть короче 1000 символов";
        }
        return true;
    }
};
export const priceValidation = {
    required: REQUIRED_FIELD,
    validate: (value: number) => {
        if (value <= 0) {
            return "Цена не может равняться 0";
        }
        if (value >= 10_000_000) {
            return "Цена не должна превышать 10 000 000";
        }
        return true;
    }
};
export const kolValidation = {
    required: REQUIRED_FIELD,
    validate: (value: number) => {
        if (value <= 0) {
            return "Количество не может равняться 0";
        }
        if (value >= 999) {
            return "Количество не должно превышать 999";
        }
        return true;
    }
};
