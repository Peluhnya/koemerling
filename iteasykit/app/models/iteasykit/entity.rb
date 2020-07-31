module Iteasykit
  class Entity < ApplicationRecord
    translates :slug
    extend FriendlyId
    friendly_id :slug, :use => [:slugged, :finders, :globalize, :history]
    belongs_to :iteasykit_entity_type, class_name: "Iteasykit::EntityType"
    belongs_to :iteasykit_seomore, optional: true, class_name: "Iteasykit::Seomore", dependent: :destroy
    has_many :fcis, as: :fciable
    has_many :rel_cells, as: :relable, class_name: "Iteasykit::RelCell", foreign_key: :relable_id, dependent: :destroy
    has_many :iteasykit_cells, through: :rel_cells
    has_many :rel_taxonomies, as: :relable, class_name: "Iteasykit::RelTaxonomy", foreign_key: :relable_id, dependent: :destroy
    accepts_nested_attributes_for   :iteasykit_seomore

    after_save :translit

    def translit
      if slug.blank?
        if self.title.present?
          @translit = I18n.transliterate(self.title)
          update(slug: @translit.parameterize(separator: "_")+id.to_s)
        else
          update(slug: self.id)
        end
      end
    end

    def field(name)
      fci = Iteasykit::Fci.find_by_machine_name(name)
      if fci
        m = ('Iteasykit::Fci'+fci.type_fci.camelize).constantize
        if fci.is_multi?
          mf = m.where(iteasykit_fci_id: fci.id, fieldable_type: 'Iteasykit::Entity', fieldable_id: id)
          if mf
            if m.class_name == "IteasykitFciImage"
              mf.map{|f| f.file}.compact
            else
              if mf.value.class == Integer
                mfv = mf.value
              else
                mfv = mf.value.html_safe
              end
            end
          end
        else
          mf = m.find_by(iteasykit_fci_id: fci.id, fieldable_type: 'Iteasykit::Entity', fieldable_id: id)
          if mf
            if m.class_name == "IteasykitFciImage"
              mf.file
            else
              if mf.value.class == Integer
                mfv = mf.value
              else
                mfv = mf.value.html_safe
              end
            end
          end
        end
      end
    end

    def field_name(name)
      fci = Iteasykit::Fci.find_by_machine_name(name)
      fci.name.html_safe if fci
    end

    def title
      if iteasykit_entity_type.present?
        if iteasykit_entity_type.id_title_fci.present?
          fci = Iteasykit::Fci.find(iteasykit_entity_type.id_title_fci)
          mf = FciString.find_by(iteasykit_fci_id: fci.id, fieldable_type: 'Iteasykit::Entity', fieldable_id: id)
          if mf
            mf.value.html_safe
          end
        end
      end
    end

    def cells(mid)
      rel_cells.joins(:iteasykit_cell).where(iteasykit_cells: {iteasykit_entity_type_id: mid}).each do |rel|
				cell = rel.iteasykit_cell
        yield(cell)
      end
    end


  end
end
