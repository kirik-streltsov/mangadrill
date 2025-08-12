# Гайдлайн по участию

## 📃 Разделы:

- [Начало работы](#start)
- [Я нашел баг или хочу предложить идею, что мне делать?](#suggestions)
- [Как коммитить?](#how-to-commit)
- [Полезные ссылки](#useful-links)

<a name="start"></a>
## ⌨️ Начало работы

Открой редактор кода

Открой терминал (хоткей для VSCode: Ctrl+`)

Склонируй репозиторий:

```sh
git clone https://github.com/kirik-streltsov/mangadrill.git && cd mangadrill
```

> ❗Не забудь установить все пакеты:
>
> ```sh
> npm i
> ```

Открой проект с помощью (при условии, что используется VSCode):

```sh
code .
```
<a name="suggestions"></a>
## 💡 Я нашел баг или хочу предложить идею, что мне делать?

Тебе на страницу [Issues](https://github.com/kirik-streltsov/mangadrill/issues) репозитория

Кликни на кнопку New Issue

Придумай название для Issue. Оно должно коротко и ясно описывать суть предложения или бага

[Подробнее об Issues](https://dev.to/ledsifes/github-learning-about-the-feature-called-issues-2ifm)

Желательно (но вовсе не обязательно) дать описание **предложения**, в чем может заключаться его польза и/или идеи по реализации

В случае с **багом** описание **обязательно** и должно содержать алгоритм его воспроизведения

> 🤓 Иначе говоря, при каких условия возник баг, описать какие действия привели к его возникновению

<a name="how-to-commit"></a> 
## 🧑‍💻 Как коммитить?

1. Сперва переходим в ветку develop:

```sh
git checkout develop
```

2. Далее от этой ветки (develop) создаем свою:

```sh
git checkout -b <имя-твоей-ветки> develop
```

3. Теперь можно приступать к редактированию файлов

4. После работы с кодом добавляем все файлы:

```sh
git add <перечисление-файлов-над-которыми-работали>
```

5. Создаем коммит:

```sh
git commit -m "Содержательное сообщение #<issue-id>"
```

> 🤓 Пример содержательного сообщения для коммита:
>
> ```sh
> git commit -m "Implemented VK OAuth login #65"
> ```

6. После коммита пушим ветку:

```sh
git push origin <имя-твоей-ветки>
```

7. Далее заходим на GitHub во вкладку [Pull Requests](https://github.com/kirik-streltsov/mangadrill/pulls)

Кликаем на кнопку New pull request

Затем выбираем следующие ветки:

> base: develop

> compare: <имя-твоей-ветки>

Далее нажимаем на кнопку Create pull request

Если возникает Merge Conflict, решаем его, нажав на кнопку Resolve conflicts и внеся изменения

Нажимаем на кнопку Mark as resolved

8. Далее ждем результат код ревью

9. Если пулл реквест замержили (иначе говоря, все прошло успешно и к коду нет замечаний), нужно удалить ветку, связанную с этим пулл реквестом ([Подробнее об этом здесь](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request))

<a name="useful-links">
## 🔗 Полезные ссылки

- [How to Use Git and GitHub in a Team like a Pro](https://www.freecodecamp.org/news/how-to-use-git-and-github-in-a-team-like-a-pro/)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
