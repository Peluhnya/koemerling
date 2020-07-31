# This migration comes from iteasykit (originally 20180429154932)
class AddRoleToIteasykitUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :iteasykit_users, :role, :string
  end
end
