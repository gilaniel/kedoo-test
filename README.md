# Kedoo 2.0

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Полезная информация

- [ТехДок от Крылова](https://docs.google.com/document/d/1nqVT2SZIU166pUnOyP3k49CiML3NxPeV3l63VnTyZps/edit)

- [Макеты в Figma](https://www.figma.com/design/7gxyK6OTSrTyUpnb5orB1z/KEDOO-2.0?node-id=1387-4832&node-type=canvas&t=KRIiqsETFLcmhcF0-0)

## Приложения

`/apps`

- `landing`

## Пакеты

`/libs`
| | Description |
| -------- | ------------------------------- |
| `adults` | Библиотеки для `adults` |
| `kids` | Библиотеки для `kids` |
| `shared/ui-shadcn` | Компоненты `shadcn` |

## Run tasks

To run the dev server for your app, use:

```sh

npx nx dev app_name

```

To create a production bundle:

```sh

npx nx build app_name

```

To see all available targets to run for a project, run:

```sh

npx nx show project app_name

```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Добавление компонентов Shadcn

Добавить новый компонент из [доступных](https://ui.shadcn.com/docs/components):
`npx shadcn@latest add component_name`

После необходимо зайти в созданный компонент и исправить путь до `utils`:

```diff
- import { cn } from '@kedoo/shared/utils';
+ import { cn } from '../../utils';
```

Последнее: не забудь экспортировать компонент в `index.ts` shadcn-либы.

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh

npx nx g @nx/next:app demo

```

To generate a new library, use:

```sh

npx nx g @nx/react:lib mylib

```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
