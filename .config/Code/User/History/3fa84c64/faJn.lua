-- This file can be loaded by calling `lua require('plugins')` from your init.vim
-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
	-- Packer can manage itself
	use 'wbthomason/packer.nvim'

	use({'nvim-telescope/telescope.nvim', tag = '0.1.4', requires = {{'nvim-lua/plenary.nvim'}}})
	use('projekt0n/github-nvim-theme')
	use('nvim-treesitter/nvim-treesitter', { run = ':TSUpdate' })
	use('nvim-treesitter/playground')
	use('nvim-lua/plenary.nvim')
	use('ThePrimeagen/harpoon')
	use('mbbill/undotree')
	use('tpope/vim-fugitive')

	use {
		'VonHeikemen/lsp-zero.nvim',
		branch = 'v3.x',
		requires = {
			--- Uncomment these if you want to manage LSP servers from neovim
			-- {'williamboman/mason.nvim'},
			-- {'williamboman/mason-lspconfig.nvim'},

			-- LSP Support
			{'neovim/nvim-lspconfig'},
			-- Autocompletion
			{'hrsh7th/nvim-cmp'},
			{'hrsh7th/cmp-nvim-lsp'},
			{'L3MON4D3/LuaSnip'},
		}
	}

	use({'nvim-tree/nvim-tree.lua', requires = { 'nvim-tree/nvim-web-devicons' }})
	use({'nvim-lualine/lualine.nvim', requires = { 'nvim-tree/nvim-web-devicons', opt = true }})
	use({'l3mon4d3/luasnip', tag = 'v2.*', run = 'make install_jsregexp'})
	-- use('rafamadrz/friendly-snippets')

	use {
		"folke/which-key.nvim",
		config = function()
			vim.o.timeout = true
			vim.o.timeoutlen = 300
			require("which-key").setup {
				-- your configuration comes here
				-- or leave it empty to use the default settings
				-- refer to the configuration section below
			}
		end
	}

	use {
		"hrsh7th/nvim-cmp",
		requires = {
			"hrsh7th/cmp-buffer", "hrsh7th/cmp-nvim-lsp",
			'quangnguyen30192/cmp-nvim-ultisnips', 'hrsh7th/cmp-nvim-lua',
			'octaltree/cmp-look', 'hrsh7th/cmp-path', 'hrsh7th/cmp-calc',
			'f3fora/cmp-spell', 'hrsh7th/cmp-emoji'
		}
	}

	use({
		'nvimdev/dashboard-nvim',
		requires = {'nvim-tree/nvim-web-devicons'}
	})

	use({
		"willothy/nvim-cokeline",
		requires = {
			"nvim-lua/plenary.nvim",        -- Required for v0.4.0+
			"kyazdani42/nvim-web-devicons", -- If you want devicons
			"stevearc/resession.nvim"       -- Optional, for persistent history
		}
	})
end)
