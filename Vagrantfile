VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
    v.cpus = 1
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = 'provisioning/development.yml'
  end

  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "rails-example"

  # config.vm.network "private_network", ip: "192.168.13.30"

  config.vm.network :forwarded_port, guest: 3000, host: 8080
end


