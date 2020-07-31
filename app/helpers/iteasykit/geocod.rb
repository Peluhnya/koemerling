module Iteasykit
    module GeocodHelper

        def geocod(d)
            Iteasykit::FciString.where(iteasykit_fci_id: d).where.not(value: '').map{|e| e.value+', '+e.fieldable_id.to_s}.map{|e| e.split(', ')}

        end

    end                    
end
