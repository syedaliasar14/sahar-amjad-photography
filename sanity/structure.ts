import { CogIcon, DocumentIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

const singletons = [
  { type: 'siteSettings', title: 'Site Settings', icon: CogIcon },
  { type: 'homePage', title: 'Home Page', icon: DocumentIcon },
  { type: 'aboutPage', title: 'About Page', icon: DocumentIcon },
]

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(({ type, title, icon }) =>
        S.listItem()
          .title(title)
          .icon(icon)
          .child(S.document().schemaType(type).documentId(type).title(title)),
      ),
      ...S.documentTypeListItems().filter(
        (item) => !singletons.some((s) => s.type === item.getId()),
      ),
    ])
