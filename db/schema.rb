# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_26_082250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.string "locale"
    t.index ["locale"], name: "index_friendly_id_slugs_on_locale"
    t.index ["slug", "sluggable_type", "locale"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_locale"
    t.index ["slug", "sluggable_type", "scope", "locale"], name: "index_friendly_id_slugs_uniqueness", unique: true
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "iteasykit_block_translations", force: :cascade do |t|
    t.integer "iteasykit_block_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "admin_name"
    t.text "description_admin"
    t.index ["iteasykit_block_id"], name: "index_iteasykit_block_translations_on_iteasykit_block_id"
    t.index ["locale"], name: "index_iteasykit_block_translations_on_locale"
  end

  create_table "iteasykit_blocks", force: :cascade do |t|
    t.string "region"
    t.string "type_url"
    t.text "url"
    t.string "etl_type"
    t.text "entity_type_lists"
    t.string "machine_name"
    t.boolean "active"
    t.integer "position"
    t.boolean "system"
    t.bigint "iteasykit_entity_type_id"
    t.string "elementcls"
    t.string "idcls"
    t.string "csscls"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_entity_type_id"], name: "index_iteasykit_blocks_on_iteasykit_entity_type_id"
  end

  create_table "iteasykit_cells", force: :cascade do |t|
    t.bigint "iteasykit_entity_type_id"
    t.boolean "active"
    t.boolean "sticky"
    t.integer "position"
    t.string "group"
    t.string "machine_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_entity_type_id"], name: "index_iteasykit_cells_on_iteasykit_entity_type_id"
  end

  create_table "iteasykit_entities", force: :cascade do |t|
    t.string "machine_name"
    t.bigint "iteasykit_entity_type_id"
    t.boolean "active"
    t.boolean "sticky"
    t.bigint "iteasykit_seomore_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_entity_type_id"], name: "index_iteasykit_entities_on_iteasykit_entity_type_id"
    t.index ["iteasykit_seomore_id"], name: "index_iteasykit_entities_on_iteasykit_seomore_id"
  end

  create_table "iteasykit_entity_translations", force: :cascade do |t|
    t.integer "iteasykit_entity_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug", null: false
    t.index ["iteasykit_entity_id"], name: "index_iteasykit_entity_translations_on_iteasykit_entity_id"
    t.index ["locale"], name: "index_iteasykit_entity_translations_on_locale"
  end

  create_table "iteasykit_entity_type_translations", force: :cascade do |t|
    t.integer "iteasykit_entity_type_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "description"
    t.text "help"
    t.index ["iteasykit_entity_type_id"], name: "index_48639a522c86749428547454744d196eb0a30474"
    t.index ["locale"], name: "index_iteasykit_entity_type_translations_on_locale"
  end

  create_table "iteasykit_entity_types", force: :cascade do |t|
    t.string "machine_name"
    t.string "rel_model"
    t.boolean "active"
    t.boolean "nesting"
    t.boolean "relation"
    t.boolean "path_root_url"
    t.boolean "comment"
    t.boolean "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "id_title_fci"
  end

  create_table "iteasykit_fci_booleans", force: :cascade do |t|
    t.boolean "value"
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fcib"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_booleans_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_full_text_translations", force: :cascade do |t|
    t.integer "iteasykit_fci_full_text_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "value"
    t.text "shortvalue"
    t.index ["iteasykit_fci_full_text_id"], name: "index_09db49ee490f7954849b4e635b94249e7186bf47"
    t.index ["locale"], name: "index_iteasykit_fci_full_text_translations_on_locale"
  end

  create_table "iteasykit_fci_full_texts", force: :cascade do |t|
    t.string "format_field"
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fcift"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_full_texts_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_images", force: :cascade do |t|
    t.string "title"
    t.string "alt"
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fciim"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_images_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_integers", force: :cascade do |t|
    t.integer "value"
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fcii"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_integers_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_string_translations", force: :cascade do |t|
    t.integer "iteasykit_fci_string_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "value"
    t.index ["iteasykit_fci_string_id"], name: "index_9f06d729665e2e5414c51ebd16c88e1345eaf8ba"
    t.index ["locale"], name: "index_iteasykit_fci_string_translations_on_locale"
  end

  create_table "iteasykit_fci_strings", force: :cascade do |t|
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fcis"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_strings_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_text_translations", force: :cascade do |t|
    t.integer "iteasykit_fci_text_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "value"
    t.index ["iteasykit_fci_text_id"], name: "index_iteasykit_fci_text_translations_on_iteasykit_fci_text_id"
    t.index ["locale"], name: "index_iteasykit_fci_text_translations_on_locale"
  end

  create_table "iteasykit_fci_texts", force: :cascade do |t|
    t.bigint "iteasykit_fci_id"
    t.string "fieldable_type"
    t.integer "fieldable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_id", "fieldable_type"], name: "fcit"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_texts_on_iteasykit_fci_id"
  end

  create_table "iteasykit_fci_translations", force: :cascade do |t|
    t.integer "iteasykit_fci_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "help"
    t.string "placeholder"
    t.text "value"
    t.string "prefix"
    t.string "suffix"
    t.index ["iteasykit_fci_id"], name: "index_iteasykit_fci_translations_on_iteasykit_fci_id"
    t.index ["locale"], name: "index_iteasykit_fci_translations_on_locale"
  end

  create_table "iteasykit_fcis", force: :cascade do |t|
    t.string "elementcls"
    t.string "idcls"
    t.string "classcls"
    t.string "machine_name"
    t.string "type_fci"
    t.boolean "active"
    t.boolean "is_required"
    t.integer "position"
    t.boolean "is_filter"
    t.boolean "is_multi"
    t.string "fciable_type"
    t.integer "fciable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fciable_type"], name: "fci"
  end

  create_table "iteasykit_form_translations", force: :cascade do |t|
    t.integer "iteasykit_form_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug", null: false
    t.index ["iteasykit_form_id"], name: "index_iteasykit_form_translations_on_iteasykit_form_id"
    t.index ["locale"], name: "index_iteasykit_form_translations_on_locale"
  end

  create_table "iteasykit_forms", force: :cascade do |t|
    t.bigint "iteasykit_entity_type_id"
    t.boolean "active"
    t.boolean "sticky"
    t.integer "position"
    t.string "group"
    t.string "machine_name"
    t.bigint "iteasykit_seomore_id"
    t.boolean "calc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_entity_type_id"], name: "index_iteasykit_forms_on_iteasykit_entity_type_id"
    t.index ["iteasykit_seomore_id"], name: "index_iteasykit_forms_on_iteasykit_seomore_id"
  end

  create_table "iteasykit_menu_item_translations", force: :cascade do |t|
    t.integer "iteasykit_menu_item_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "title"
    t.string "url"
    t.index ["iteasykit_menu_item_id"], name: "index_b51ca72d3b48567a64bdb5c56b09607dd81f81e7"
    t.index ["locale"], name: "index_iteasykit_menu_item_translations_on_locale"
  end

  create_table "iteasykit_menu_items", force: :cascade do |t|
    t.string "itemable_type"
    t.integer "itemable_id"
    t.bigint "iteasykit_menu_id"
    t.string "ancestry"
    t.integer "ancestry_depth", default: 0
    t.boolean "active"
    t.integer "position"
    t.boolean "blocked"
    t.string "elementcls"
    t.string "idcls"
    t.string "csscls"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ancestry"], name: "index_iteasykit_menu_items_on_ancestry"
    t.index ["iteasykit_menu_id"], name: "index_iteasykit_menu_items_on_iteasykit_menu_id"
    t.index ["itemable_type"], name: "ib"
  end

  create_table "iteasykit_menu_translations", force: :cascade do |t|
    t.integer "iteasykit_menu_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "description"
    t.index ["iteasykit_menu_id"], name: "index_iteasykit_menu_translations_on_iteasykit_menu_id"
    t.index ["locale"], name: "index_iteasykit_menu_translations_on_locale"
  end

  create_table "iteasykit_menus", force: :cascade do |t|
    t.boolean "active"
    t.string "machine_name"
    t.string "elementcls"
    t.string "idcls"
    t.string "csscls"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "iteasykit_rel_cells", force: :cascade do |t|
    t.bigint "iteasykit_cell_id"
    t.string "relable_type"
    t.integer "relable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_cell_id"], name: "index_iteasykit_rel_cells_on_iteasykit_cell_id"
    t.index ["relable_type", "relable_id"], name: "relablecell"
  end

  create_table "iteasykit_rel_taxonomies", force: :cascade do |t|
    t.bigint "iteasykit_taxonomy_id"
    t.string "relable_type"
    t.integer "relable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["iteasykit_taxonomy_id"], name: "index_iteasykit_rel_taxonomies_on_iteasykit_taxonomy_id"
  end

  create_table "iteasykit_seomore_translations", force: :cascade do |t|
    t.integer "iteasykit_seomore_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.string "keywords"
    t.text "description"
    t.string "canonical"
    t.string "author"
    t.string "publisher"
    t.string "alternate"
    t.string "refresh"
    t.index ["iteasykit_seomore_id"], name: "index_iteasykit_seomore_translations_on_iteasykit_seomore_id"
    t.index ["locale"], name: "index_iteasykit_seomore_translations_on_locale"
  end

  create_table "iteasykit_seomores", force: :cascade do |t|
    t.boolean "noindex"
    t.boolean "nofollow"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "iteasykit_taxonomies", force: :cascade do |t|
    t.string "ancestry"
    t.integer "ancestry_depth", default: 0
    t.boolean "active"
    t.integer "position"
    t.boolean "blocked"
    t.boolean "sticky"
    t.bigint "iteasykit_entity_type_id"
    t.bigint "iteasykit_seomore_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "machine_name"
    t.index ["ancestry"], name: "index_iteasykit_taxonomies_on_ancestry"
    t.index ["iteasykit_entity_type_id"], name: "index_iteasykit_taxonomies_on_iteasykit_entity_type_id"
    t.index ["iteasykit_seomore_id"], name: "index_iteasykit_taxonomies_on_iteasykit_seomore_id"
  end

  create_table "iteasykit_taxonomy_translations", force: :cascade do |t|
    t.integer "iteasykit_taxonomy_id", null: false
    t.string "locale", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug", null: false
    t.index ["iteasykit_taxonomy_id"], name: "index_iteasykit_taxonomy_translations_on_iteasykit_taxonomy_id"
    t.index ["locale"], name: "index_iteasykit_taxonomy_translations_on_locale"
  end

  create_table "iteasykit_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
    t.index ["email"], name: "index_iteasykit_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_iteasykit_users_on_reset_password_token", unique: true
  end

  create_table "versions", force: :cascade do |t|
    t.string "item_type", null: false
    t.integer "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.datetime "created_at"
    t.index ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"
  end

  add_foreign_key "iteasykit_blocks", "iteasykit_entity_types"
  add_foreign_key "iteasykit_cells", "iteasykit_entity_types"
  add_foreign_key "iteasykit_entities", "iteasykit_entity_types"
  add_foreign_key "iteasykit_entities", "iteasykit_seomores"
  add_foreign_key "iteasykit_fci_booleans", "iteasykit_fcis"
  add_foreign_key "iteasykit_fci_full_texts", "iteasykit_fcis"
  add_foreign_key "iteasykit_fci_images", "iteasykit_fcis"
  add_foreign_key "iteasykit_fci_integers", "iteasykit_fcis"
  add_foreign_key "iteasykit_fci_strings", "iteasykit_fcis"
  add_foreign_key "iteasykit_fci_texts", "iteasykit_fcis"
  add_foreign_key "iteasykit_forms", "iteasykit_entity_types"
  add_foreign_key "iteasykit_forms", "iteasykit_seomores"
  add_foreign_key "iteasykit_menu_items", "iteasykit_menus"
  add_foreign_key "iteasykit_rel_cells", "iteasykit_cells"
  add_foreign_key "iteasykit_rel_taxonomies", "iteasykit_taxonomies"
  add_foreign_key "iteasykit_taxonomies", "iteasykit_entity_types"
  add_foreign_key "iteasykit_taxonomies", "iteasykit_seomores"
end
